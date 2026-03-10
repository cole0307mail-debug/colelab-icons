// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TempleOutlinedSvg from '@colelab/icons-svg/es/asn/TempleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TempleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TempleOutlinedSvg }, slots);
  },
});
