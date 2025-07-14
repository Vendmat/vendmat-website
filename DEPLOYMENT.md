# Production Deployment Guide

## Pre-deployment Checklist

### ✅ Completed
- [x] TypeScript errors fixed
- [x] Production build successful
- [x] Error boundaries and loading states added
- [x] Global error page (404, error.tsx, loading.tsx)
- [x] Contact information updated with real data
- [x] Google Maps fixed (Bangalore instead of Melbourne)
- [x] Hot supply chain messaging updated throughout
- [x] SEO metadata with proper metadataBase
- [x] Images optimized and alt texts verified
- [x] Navigation links verified
- [x] Mobile responsiveness tested
- [x] robots.txt and sitemap.xml configured

### 🔧 Configuration Required

1. **Environment Variables** (`.env.production`):
   ```bash
   RESEND_API_KEY=your_resend_api_key
   FORMSPREE_ENDPOINT=your_formspree_endpoint
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   ```

2. **Google Site Verification**:
   - Add verification code to `src/app/layout.tsx` line 84

3. **Analytics Setup**:
   - Configure Google Analytics ID
   - Set up conversion tracking for contact form

## Production Build Commands

```bash
# Type check
npm run type-check

# Build for production
npm run build:production

# Serve locally to test
npm run serve
```

## Deployment Platforms

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: .next

# For static export (alternative):
# Build command: npm run export  
# Publish directory: out
```

### AWS S3 + CloudFront
```bash
# Build static export
npm run export

# Upload 'out' directory to S3
# Configure CloudFront distribution
```

## Performance Optimizations

### Already Implemented
- Image optimization with WebP/AVIF formats
- Gzip compression enabled
- Static page generation
- Code splitting and lazy loading
- CSS optimization

### Post-deployment
1. **CDN Setup**: Configure CloudFront or Vercel Edge Network
2. **Caching Headers**: Set appropriate cache policies
3. **Analytics**: Monitor Core Web Vitals
4. **Error Monitoring**: Set up Sentry or similar

## SEO Configuration

### Completed
- Meta tags and Open Graph
- Structured data for organization
- XML sitemap
- robots.txt
- Canonical URLs

### Post-launch
1. Submit sitemap to Google Search Console
2. Add Google site verification
3. Set up Google My Business
4. Configure social media meta tags

## Security Considerations

- Environment variables properly configured
- No sensitive data in client-side code
- HTTPS enforced
- Content Security Policy (CSP) recommended
- Rate limiting for contact form

## Monitoring & Analytics

### Recommended Setup
1. **Google Analytics 4**: User behavior tracking
2. **Google Search Console**: SEO monitoring
3. **Core Web Vitals**: Performance monitoring
4. **Uptime monitoring**: Service availability
5. **Error tracking**: Application errors

## Contact Form Configuration

The contact form supports multiple providers:
1. **Resend** (Primary): Professional email service
2. **Formspree** (Fallback): Reliable form handling
3. **Console logging** (Development): Local testing

Configure at least one email service for production.

## Domain & DNS Configuration

### Required DNS Records
```
A     @           [hosting_ip]
CNAME www         [hosting_domain]
CNAME vendmat.com [hosting_domain]
```

### SSL Certificate
- Let's Encrypt (free) or CloudFlare SSL
- Enforce HTTPS redirects
- HSTS headers recommended

## Launch Checklist

- [ ] Domain configured and SSL active
- [ ] Environment variables set
- [ ] Contact form tested with real emails
- [ ] Google Analytics tracking verified
- [ ] Search Console configured
- [ ] Social media meta tags tested
- [ ] Performance audit completed (Lighthouse score >90)
- [ ] Mobile responsiveness verified across devices
- [ ] Cross-browser testing completed
- [ ] Backup and recovery plan in place

## Maintenance

### Regular Tasks
- Monitor website performance
- Update dependencies monthly
- Backup database and assets
- Review analytics reports
- Update content and blog posts
- Monitor contact form submissions

### Security Updates
- Keep Next.js and dependencies updated
- Monitor for security vulnerabilities
- Regular security audits
- SSL certificate renewal (if not auto-renewed)

## Support & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

For technical support, contact the development team or refer to the project documentation.