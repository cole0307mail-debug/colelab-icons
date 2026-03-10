// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AreaOutlinedSvg from '@colelab/icons-svg/es/asn/AreaOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AreaOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AreaOutlinedSvg }, slots);
  },
});
