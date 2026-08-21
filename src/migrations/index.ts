import * as migration_20260809_172137_phase_3_cms from './20260809_172137_phase_3_cms';
import * as migration_20260819_123143_entry_screen from './20260819_123143_entry_screen';
import * as migration_20260819_193826_menu_families from './20260819_193826_menu_families';
import * as migration_20260820_210033_quote_consent from './20260820_210033_quote_consent';
import * as migration_20260821_100227_page_editorial from './20260821_100227_page_editorial';

export const migrations = [
  {
    up: migration_20260809_172137_phase_3_cms.up,
    down: migration_20260809_172137_phase_3_cms.down,
    name: '20260809_172137_phase_3_cms',
  },
  {
    up: migration_20260819_123143_entry_screen.up,
    down: migration_20260819_123143_entry_screen.down,
    name: '20260819_123143_entry_screen',
  },
  {
    up: migration_20260819_193826_menu_families.up,
    down: migration_20260819_193826_menu_families.down,
    name: '20260819_193826_menu_families',
  },
  {
    up: migration_20260820_210033_quote_consent.up,
    down: migration_20260820_210033_quote_consent.down,
    name: '20260820_210033_quote_consent',
  },
  {
    up: migration_20260821_100227_page_editorial.up,
    down: migration_20260821_100227_page_editorial.down,
    name: '20260821_100227_page_editorial'
  },
];
