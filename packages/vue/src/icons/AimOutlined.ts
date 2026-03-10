// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AimOutlinedSvg from '@colelab/icons-svg/es/asn/AimOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AimOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AimOutlinedSvg }, slots);
  },
});
