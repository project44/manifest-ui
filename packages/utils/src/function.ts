/**
 * Call all callbacks in the order they were received.
 */
export function chainCallbacks(...callbacks: any[]): (...args: any[]) => void {
  return function func(...args: any[]) {
    callbacks.forEach(callback => {
      if (typeof callback === 'function') {
        callback?.(...args);
      }
    });
  };
}
