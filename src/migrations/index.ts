import * as migration_20260809_172137_phase_3_cms from './20260809_172137_phase_3_cms';
import * as migration_20260819_123143_entry_screen from './20260819_123143_entry_screen';
import * as migration_20260819_193826_menu_families from './20260819_193826_menu_families';

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
    name: '20260819_193826_menu_families'
  },
];
