// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NoPhotoOutlinedSvg from '@colelab/icons-svg/es/asn/NoPhotoOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NoPhotoOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NoPhotoOutlinedSvg }, slots);
  },
});
