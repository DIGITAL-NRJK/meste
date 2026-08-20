import type { GalleryContent } from '@/lib/pages/gallery/types'

/**
 * French baseline for the gallery. Like the English one, it ships with no
 * image: the empty state is the launch state until approved photography exists.
 */
export const galleryCopyFR: GalleryContent = {
  meta: {
    title: 'Galerie',
    description:
      'Les photographies des tables, buffets et réceptions de Mama Emma Service Traiteur d’Excellence à Accra.',
  },
  skipToContent: 'Aller au contenu',
  intro: {
    eyebrow: 'Galerie',
    headingLead: 'À quoi ressemble une table',
    headingAccent: 'quand nous la quittons.',
    lede: 'Buffets, service à l’assiette, cocktails et célébrations — photographiés tels qu’ils ont été servis, et non reconstitués après coup.',
  },
  filters: {
    allLabel: 'Tout',
    groupLabel: 'Filtrer par catégorie',
  },
  categoryLabels: {
    food: 'Cuisine',
    cocktail: 'Cocktails',
    buffet: 'Buffets',
    'table-service': 'Service à table',
    'mama-emma-fresh': 'Mama Emma Fresh',
    events: 'Événements',
    team: 'L’équipe',
    brand: 'La maison',
    experience: 'The Experience',
    'behind-the-scenes': 'En coulisses',
    corporate: 'Entreprise',
    institutional: 'Institutionnel',
    celebrations: 'Célébrations',
  },
  items: [],
  empty: {
    heading: 'Les photographies sont en cours.',
    body: 'Nous préférons ne rien vous montrer plutôt que de vous montrer le travail d’un autre. Chaque image ici sera une table MESTE, photographiée telle qu’elle a été servie — et cette page se remplira dès la première prise de vue validée.',
  },
  lightbox: {
    dialogLabel: 'Image de la galerie',
    closeLabel: 'Fermer',
    nextLabel: 'Image suivante',
    previousLabel: 'Image précédente',
  },
  closing: {
    heading: 'Votre table pourrait être la prochaine ici.',
    body: 'Dites-nous la date, le lieu et le nombre de convives.',
    action: { label: 'Demander un devis', route: 'quote' },
  },
}
