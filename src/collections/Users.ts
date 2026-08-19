import type { CollectionConfig } from 'payload'

import {
  adminFieldAccess,
  adminOnly,
  adminPanelOnly,
  adminOrFirstUser,
  adminOrSelf,
  userRoles,
} from './access/roles'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: adminPanelOnly,
    create: adminOrFirstUser,
    delete: adminOnly,
    read: adminOnly,
    update: adminOrSelf,
  },
  admin: {
    defaultColumns: ['name', 'email', 'role', 'updatedAt'],
    description: 'Private CMS accounts. Editors cannot manage users or roles.',
    group: 'Administration',
    useAsTitle: 'email',
  },
  auth: {
    lockTime: 10 * 60 * 1_000,
    maxLoginAttempts: 5,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      access: {
        create: adminFieldAccess,
        update: adminFieldAccess,
      },
      defaultValue: 'editor',
      options: userRoles.map((role) => ({
        label: role === 'admin' ? 'Administrator' : 'Editor',
        value: role,
      })),
      required: true,
      saveToJWT: true,
    },
  ],
}
