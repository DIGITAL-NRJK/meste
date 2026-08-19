import type { Block } from 'payload'

import {
  EditorialSplitBlock,
  EditorialTextImageBlock,
  HeroBlock,
  ManifestoBlock,
  QuoteBlock,
  StoryChapterBlock,
} from './editorial'
import { FullBleedImageBlock, GalleryPreviewBlock, ReferencesBlock } from './media'
import {
  CTABlock,
  FreshProductsBlock,
  MamaEmmaExperienceTeaserBlock,
  MenuShowcaseBlock,
  ProcessBlock,
  ServiceShowcaseBlock,
  SignatureDishesBlock,
} from './showcases'

export const controlledBlocks: Block[] = [
  HeroBlock,
  EditorialTextImageBlock,
  FullBleedImageBlock,
  ManifestoBlock,
  QuoteBlock,
  ServiceShowcaseBlock,
  MenuShowcaseBlock,
  SignatureDishesBlock,
  FreshProductsBlock,
  GalleryPreviewBlock,
  ReferencesBlock,
  ProcessBlock,
  MamaEmmaExperienceTeaserBlock,
  CTABlock,
  EditorialSplitBlock,
  StoryChapterBlock,
]
