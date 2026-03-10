// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MultiplePicturesFilledSvg from '@colelab/icons-svg/es/asn/MultiplePicturesFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MultiplePicturesFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MultiplePicturesFilledSvg }, slots);
  },
});
