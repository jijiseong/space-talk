export function cn(...args: (string | undefined)[]) {
  return args
    .filter(v => v !== undefined)
    .join(' ')
    .trim();
}

export const decodeJWT = (token: string) => {
  try {
    const payload = token.split('.')[1];
    if (!payload) throw new Error('Invalid token');
    return JSON.parse(atob(payload));
  } catch {
    throw new Error('Invalid token');
  }
};
