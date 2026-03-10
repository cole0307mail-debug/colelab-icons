// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ParabolicOutlinedSvg from '@colelab/icons-svg/es/asn/ParabolicOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ParabolicOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ParabolicOutlinedSvg }, slots);
  },
});
