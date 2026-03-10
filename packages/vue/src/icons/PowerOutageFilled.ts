// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PowerOutageFilledSvg from '@colelab/icons-svg/es/asn/PowerOutageFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PowerOutageFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PowerOutageFilledSvg }, slots);
  },
});
