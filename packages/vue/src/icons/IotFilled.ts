// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import IotFilledSvg from '@colelab/icons-svg/es/asn/IotFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'IotFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: IotFilledSvg }, slots);
  },
});
