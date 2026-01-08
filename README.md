# Personal Homepage Template Inspised by yeezy.com
I'm currently using this template as my personal home page: [https://yichenl.com/](https://yichenl.com/)
### Installation

```bash
# Clone the repository
git clone https://github.com/yichenl61/yeezy-personal-website.git

# Navigate to project directory
cd yeezy-personal-website

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Update Your Information

Edit `app/page.tsx` to update:
- Your name
- Bio/About section
- Contact information

### Add Your Projects

Edit `lib/works.ts` to add your portfolio projects:

```typescript
{
  id: 'project-01',
  name: 'Your Project Name',
  image: 'https://your-image-url.jpg',
  images: [
    'https://image1.jpg',
    'https://image2.jpg',
  ],
  description: 'Project description here',
  github: 'https://github.com/username/repo',
  otherLink: 'https://your-project-url.com'
}
```

## File Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── works/
│   │   └── page.tsx          # Projects listing page
│   ├── work/[slug]/
│   │   ├── page.tsx          # Project detail page
│   │   └── pdp.tsx           # Project detail component
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── header.tsx
│   ├── main-menu.tsx
│   └── product-image.tsx
├── lib/
│   ├── works.ts              # Project data
│   └── utils.ts
└── public/
```

## Credits

- **Refactor Base On**: [Yeezy - Minimal Ecommerce Store with Next.js](https://github.com/bmaxtar/nextzy)

## License

MIT License - feel free to use this template for your projects.

## Support

For issues or questions, please open an issue on GitHub.
