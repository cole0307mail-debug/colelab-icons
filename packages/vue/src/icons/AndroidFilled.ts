// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AndroidFilledSvg from '@colelab/icons-svg/es/asn/AndroidFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AndroidFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AndroidFilledSvg }, slots);
  },
});
