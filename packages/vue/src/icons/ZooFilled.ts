// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ZooFilledSvg from '@colelab/icons-svg/es/asn/ZooFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ZooFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ZooFilledSvg }, slots);
  },
});
