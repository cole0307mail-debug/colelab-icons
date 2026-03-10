// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MigrateOutlinedSvg from '@colelab/icons-svg/es/asn/MigrateOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MigrateOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MigrateOutlinedSvg }, slots);
  },
});
