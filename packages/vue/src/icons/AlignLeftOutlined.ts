// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AlignLeftOutlinedSvg from '@colelab/icons-svg/es/asn/AlignLeftOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AlignLeftOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AlignLeftOutlinedSvg }, slots);
  },
});
