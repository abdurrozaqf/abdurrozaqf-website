export function ensureActionSuccess<
  T extends { success: boolean; message?: string }
>(result: T): T & { success: true } {
  if (!result.success) {
    throw new Error(
      typeof result.message === "string" && result.message.trim()
        ? result.message
        : "Request failed"
    );
  }
  return result as T & { success: true };
}
