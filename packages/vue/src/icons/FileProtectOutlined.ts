// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileProtectOutlinedSvg from '@colelab/icons-svg/es/asn/FileProtectOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileProtectOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileProtectOutlinedSvg }, slots);
  },
});
