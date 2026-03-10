// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HandcuffsOutlinedSvg from '@colelab/icons-svg/es/asn/HandcuffsOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HandcuffsOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HandcuffsOutlinedSvg }, slots);
  },
});
