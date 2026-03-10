// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LakeOutlinedSvg from '@colelab/icons-svg/es/asn/LakeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LakeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LakeOutlinedSvg }, slots);
  },
});
