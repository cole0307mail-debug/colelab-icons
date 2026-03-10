// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WoodlandOutlinedSvg from '@colelab/icons-svg/es/asn/WoodlandOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WoodlandOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WoodlandOutlinedSvg }, slots);
  },
});
