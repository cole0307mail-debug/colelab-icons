// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HolderOutlinedSvg from '@colelab/icons-svg/es/asn/HolderOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HolderOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HolderOutlinedSvg }, slots);
  },
});
