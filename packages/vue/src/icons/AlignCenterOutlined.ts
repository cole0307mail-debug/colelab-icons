// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AlignCenterOutlinedSvg from '@colelab/icons-svg/es/asn/AlignCenterOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AlignCenterOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AlignCenterOutlinedSvg }, slots);
  },
});
