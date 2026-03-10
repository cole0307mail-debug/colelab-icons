// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AppletsOutlinedSvg from '@colelab/icons-svg/es/asn/AppletsOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AppletsOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AppletsOutlinedSvg }, slots);
  },
});
