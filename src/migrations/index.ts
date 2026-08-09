import * as migration_20260809_172137_phase_3_cms from './20260809_172137_phase_3_cms';

export const migrations = [
  {
    up: migration_20260809_172137_phase_3_cms.up,
    down: migration_20260809_172137_phase_3_cms.down,
    name: '20260809_172137_phase_3_cms'
  },
];
