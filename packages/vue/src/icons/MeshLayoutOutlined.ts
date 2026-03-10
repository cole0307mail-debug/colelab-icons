// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MeshLayoutOutlinedSvg from '@colelab/icons-svg/es/asn/MeshLayoutOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MeshLayoutOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MeshLayoutOutlinedSvg }, slots);
  },
});
