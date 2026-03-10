// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MinusOutlinedSvg from '@colelab/icons-svg/es/asn/MinusOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MinusOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MinusOutlinedSvg }, slots);
  },
});
