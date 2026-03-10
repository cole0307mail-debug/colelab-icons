// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HolderVerticalOutlinedSvg from '@colelab/icons-svg/es/asn/HolderVerticalOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HolderVerticalOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HolderVerticalOutlinedSvg }, slots);
  },
});
