/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // إذا كنت تستخدم صوراً خارجية (مثل Unsplash أو أي استضافة خارجية)
    
    // إذا كنت تستخدم صوراً محلية (مخزنة في `public/`)
    unoptimized: true, // (حل بديل إذا كانت الصور المحلية لا تعمل)
    
    // إذا كنت تريد السماح بجميع النطاقات (غير موصى به للأمان)
    // dangerouslyAllowSVG: true,
    // contentDispositionType: 'attachment',
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;