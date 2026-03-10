// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileGifOutlinedSvg from '@colelab/icons-svg/es/asn/FileGifOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileGifOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileGifOutlinedSvg }, slots);
  },
});
