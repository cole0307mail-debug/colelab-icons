// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileWordOutlinedSvg from '@colelab/icons-svg/es/asn/FileWordOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileWordOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileWordOutlinedSvg }, slots);
  },
});
