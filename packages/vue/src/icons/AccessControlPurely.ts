// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AccessControlPurelySvg from '@colelab/icons-svg/es/asn/AccessControlPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AccessControlPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AccessControlPurelySvg }, slots);
  },
});
