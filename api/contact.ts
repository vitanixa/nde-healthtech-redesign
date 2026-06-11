// Contact form now submits directly to Web3Forms from the React form.
// This file is intentionally unused.
export default function handler(_req: any, res: any) {
  return res.status(410).json({ success: false, error: 'Use Web3Forms endpoint.' });
}
