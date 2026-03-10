// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TempleFilledSvg from '@colelab/icons-svg/es/asn/TempleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TempleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TempleFilledSvg }, slots);
  },
});
