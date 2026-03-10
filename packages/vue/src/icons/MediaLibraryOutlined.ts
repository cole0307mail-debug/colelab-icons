// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MediaLibraryOutlinedSvg from '@colelab/icons-svg/es/asn/MediaLibraryOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MediaLibraryOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MediaLibraryOutlinedSvg }, slots);
  },
});
