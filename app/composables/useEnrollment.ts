// composables/useEnrollment.ts
// Stores enrolled course IDs in localStorage so they persist across page refreshes.
// Since there's no backend, this is the source of truth for enrollment status.

export function useEnrollment() {
  const STORAGE_KEY = 'enrolled_courses'

  // Get all enrolled course IDs as an array e.g. [1, 3, 5]
  function getEnrolledIds(): number[] {
    if (import.meta.client) {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    }
    return []
  }

  // Check if a specific course is already enrolled
  function isEnrolled(courseId: number): boolean {
    return getEnrolledIds().includes(courseId)
  }

  // Save a course ID after successful payment
  function markEnrolled(courseId: number): void {
    if (import.meta.client) {
      const current = getEnrolledIds()
      if (!current.includes(courseId)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, courseId]))
      }
    }
  }

  return { getEnrolledIds, isEnrolled, markEnrolled }
}