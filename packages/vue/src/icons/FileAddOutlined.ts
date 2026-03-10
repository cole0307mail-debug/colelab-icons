// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileAddOutlinedSvg from '@colelab/icons-svg/es/asn/FileAddOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileAddOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileAddOutlinedSvg }, slots);
  },
});
