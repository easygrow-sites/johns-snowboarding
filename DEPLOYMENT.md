# Deployment Guide - Johns Snowboarding

## Quick Deploy to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **From this directory, run**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: johns-snowboarding
   - Directory: ./
   - Override settings: No

4. **Production deployment**:
   ```bash
   vercel --prod
   ```

## What Gets Deployed

### Total Pages: 668

#### Core Pages (6):
- `/` - Homepage
- `/about` - About Us
- `/contact` - Contact with form
- `/services` - Services index
- `/locations` - Locations index
- `/blog` - Blog listing

#### Service Pages (12):
- `/services/snowboard-rental`
- `/services/boot-hire`
- `/services/complete-package-hire`
- `/services/kids-snowboard-hire`
- `/services/beginner-snowboard-package`
- `/services/advanced-performance-rental`
- `/services/snowboard-tuning-maintenance`
- `/services/seasonal-hire`
- `/services/group-rental-packages`
- `/services/helmet-safety-gear-hire`
- `/services/goggle-accessories-rental`
- `/services/same-day-express-hire`

#### Location Pages (50):
All Perth suburbs from Perth CBD to Thornlie

#### Service + Location Combination Pages (600):
Every service in every location, e.g.:
- `/snowboard-rental-in-perth-cbd`
- `/boot-hire-in-fremantle`
- `/complete-package-hire-in-joondalup`
- ... (600 total combinations)

## SEO Optimization

Each page includes:
- ✅ Unique title tags
- ✅ Meta descriptions with local keywords
- ✅ H1 tags with target keywords
- ✅ Internal linking structure
- ✅ Mobile-responsive design
- ✅ Fast loading times
- ✅ Schema markup ready

## Contact Form Integration

The contact form is fully integrated with EasyGrow API:
- **Endpoint**: https://www.easygrow.contractors/api/leads/submit
- **Business ID**: cmjxq3dyw0001ec2guaub2qmb
- **Source tracking**: Each form submission includes page source

## Post-Deployment Checklist

1. ✅ Verify homepage loads correctly
2. ✅ Test contact form submission
3. ✅ Check mobile responsiveness
4. ✅ Test a few service+location pages
5. ✅ Verify all images load
6. ✅ Test click-to-call buttons
7. ✅ Check navigation menu (desktop & mobile)
8. ✅ Verify footer links work

## Environment Variables

No environment variables required for basic deployment. All configuration is in the code.

## Custom Domain Setup

After deployment, to add custom domain:

1. Go to Vercel dashboard
2. Select your project
3. Go to Settings > Domains
4. Add: `johns-snowboarding.easygrow.contractors`
5. Follow DNS configuration instructions

## Monitoring

Monitor these metrics:
- Page load times (should be < 2s)
- Contact form submissions
- Click-to-call conversions
- Top landing pages via analytics

## Support

For issues or questions:
- Check README.md for development instructions
- Review Next.js 14 documentation
- Contact: support@easygrow.contractors
