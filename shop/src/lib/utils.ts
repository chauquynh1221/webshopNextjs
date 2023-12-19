import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatCurrency(amount: number) {
  const suffixes = ["", "K", "M", "B", "T"];

  let tier = Math.log10(Math.abs(amount)) / 3 | 0;

  if (tier === 0) return amount;

  const suffix = suffixes[tier];

  const scale = Math.pow(10, tier * 3);

  const scaled = amount / scale;

  return scaled.toString() + " " + suffix;
}
export function formatPrice(
  price: number | string,
  options: {
    currency?: 'VND' | 'EUR' | 'USD' | 'NDT'
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const { currency = 'VND', notation = 'compact' } = options

  const numericPrice =
    typeof price === 'string' ? parseFloat(price) : price

  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 3,
  }).format(numericPrice)
}

export function constructMetadata({
  title = 'DigitalHippo - the marketplace for digital assets',
  description = 'DigitalHippo is an open-source marketplace for high-quality digital goods.',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@joshtriedcoding',
    },
    icons,
    metadataBase: new URL('https://digitalhippo.up.railway.app'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
