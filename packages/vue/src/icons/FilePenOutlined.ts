// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FilePenOutlinedSvg from '@colelab/icons-svg/es/asn/FilePenOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FilePenOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FilePenOutlinedSvg }, slots);
  },
});
