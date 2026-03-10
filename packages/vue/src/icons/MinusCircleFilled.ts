// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MinusCircleFilledSvg from '@colelab/icons-svg/es/asn/MinusCircleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MinusCircleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MinusCircleFilledSvg }, slots);
  },
});
