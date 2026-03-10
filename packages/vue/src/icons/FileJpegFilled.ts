// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileJpegFilledSvg from '@colelab/icons-svg/es/asn/FileJpegFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileJpegFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileJpegFilledSvg }, slots);
  },
});
