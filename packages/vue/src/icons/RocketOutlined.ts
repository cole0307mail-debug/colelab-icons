// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RocketOutlinedSvg from '@colelab/icons-svg/es/asn/RocketOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RocketOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RocketOutlinedSvg }, slots);
  },
});
