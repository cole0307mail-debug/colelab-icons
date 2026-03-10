// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PayCircleFilledSvg from '@colelab/icons-svg/es/asn/PayCircleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PayCircleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PayCircleFilledSvg }, slots);
  },
});
