// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MinusCircleOutlinedSvg from '@colelab/icons-svg/es/asn/MinusCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MinusCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MinusCircleOutlinedSvg }, slots);
  },
});
