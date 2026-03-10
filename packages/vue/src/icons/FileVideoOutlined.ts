// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileVideoOutlinedSvg from '@colelab/icons-svg/es/asn/FileVideoOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileVideoOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileVideoOutlinedSvg }, slots);
  },
});
