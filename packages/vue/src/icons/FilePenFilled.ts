// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FilePenFilledSvg from '@colelab/icons-svg/es/asn/FilePenFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FilePenFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FilePenFilledSvg }, slots);
  },
});
